import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const wrapper = style({
  padding: '0 16px',
  marginBottom: '16px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const buttonsWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '18px',
});

export const tabButton = style({
  fontWeight: '400',
  fontSize: '1.6rem',
  color: '#8599AD',
});

export const activeTab = style([
  tabButton,
  {
    padding: '6px 12px',
    color: '#ffffff',
    backgroundColor: '#3D95FF',
    borderRadius: '20px',
  },
]);
