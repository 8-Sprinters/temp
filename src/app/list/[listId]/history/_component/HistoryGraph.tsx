import { useEffect, useRef } from 'react';
import { HistoryType } from '@/lib/types/historyType';
import timeDiff from '@/lib/utils/time-diff';
import { useLanguage } from '@/store/useLanguage';
import { listLocale } from '@/app/list/[listId]/locale';
import * as styles from './HistoryGraph.css';
import NoDataComponent from '@/components/NoData/NoDataComponent';

interface ItemType {
  title: string;
  history: (number | null)[];
}

interface HistoryGraphProps {
  histories: HistoryType[];
}

function HistoryGraph({ histories }: HistoryGraphProps) {
  const itemRankHistories: ItemType[] = [];
  const publicHistories = histories.filter((history) => history.isPublic);

  const { language } = useLanguage();

  publicHistories.forEach((history) => {
    history.items.forEach((item) => {
      if (!itemRankHistories.some((i) => i.title === item.title)) {
        itemRankHistories.push({ title: item.title, history: [] });
      }
    });
  });

  itemRankHistories.forEach((i) => {
    publicHistories.forEach((h) => {
      i.history.push(h.items.find((x) => x.title === i.title)?.rank || null);
    });
  });

  return (
    <div className={styles.container}>
      {publicHistories.length === 0 ? (
        <>
          <NoDataComponent message={listLocale[language].noHistory} />
        </>
      ) : (
        <Chart histories={publicHistories} itemRankHistories={itemRankHistories} />
      )}
    </div>
  );
}

interface ChartProps {
  itemRankHistories: ItemType[];
  histories: HistoryType[];
}

function Chart({ histories, itemRankHistories }: ChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const loadGoogleCharts = () => {
      const script = document.createElement('script');
      script.src = 'https://www.gstatic.com/charts/loader.js';
      script.onload = () => {
        if (window.google && window.google.charts) {
          window.google.charts.load('current', { packages: ['corechart'] });
          window.google.charts.setOnLoadCallback(() => {
            if (window.google.visualization?.LineChart) {
              drawChart();
              window.addEventListener('resize', drawChart);
            } else {
              setTimeout(drawChart, 100);
            }
          });
        }
      };
      document.body.appendChild(script);
    };

    function drawChart() {
      if (
        window.google &&
        window.google.visualization?.LineChart &&
        chartRef.current &&
        itemRankHistories.length > 0 &&
        histories.length > 0
      ) {
        const data = new window.google.visualization.DataTable();
        data.addColumn('string', 'Time');

        itemRankHistories.forEach((item) => {
          data.addColumn('number', item.title);
        });

        const rows = histories.map((history, index) => {
          const row = [timeDiff(String(history.createdDate)), ...itemRankHistories.map((item) => item.history[index])];
          return row;
        });
        data.addRows(rows);

        const options = {
          title: listLocale[language].title,
          chartArea: {
            left: 50,
            right: 20,
            top: 30,
            bottom: 100,
            width: '100%',
            height: '80%',
          },
          height: 500,
          colors: [
            '#87CEEB',
            '#0000FF',
            '#00008B',
            '#8A2BE2',
            '#32CD32',
            '#FFD700',
            '#FFA500',
            '#FF69B4',
            '#FF0000',
            '#FF1493',
          ],
          hAxis: {
            textStyle: {
              fontSize: 14,
              italic: false,
            },
            showTextEvery: 1,
          },
          vAxis: {
            direction: -1,
            ticks: Array.from({ length: 10 }, (_, i) => ({
              v: 10 - i,
              f: `${10 - i}위`, // Append "위" to each tick label
            })),
            textStyle: {
              fontSize: 14,
              italic: false,
            },
          },
          curveType: 'function',
          legend: {
            position: 'bottom',
            alignment: 'center',
            maxLines: 1,
            textStyle: { fontSize: 12 },
          },
        };

        const chart = new window.google.visualization.LineChart(chartRef.current);
        chart.draw(data, options);
      }
    }

    if (!window.google || !window.google.charts) {
      loadGoogleCharts();
    } else {
      drawChart();
    }

    return () => window.removeEventListener('resize', drawChart);
  }, [histories, itemRankHistories, language]);

  return <div ref={chartRef} style={{ minWidth: `${Math.max(histories.length * 100, 300)}px`, height: '100%' }} />;
}

export { HistoryGraph as Graph };
