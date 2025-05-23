import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { within } from '@testing-library/react';
import SubscriptionCard from './SubscriptionCard';

const mockSub = {
  id: '12345',
  brand: 'OpenAI',
  status: 'ACTIVE',
  formula: 'GPT-4 Turbo',
  sync: 'IN_SYNC',
};

describe('SubscriptionCard', () => {
 test('renders brand initials when no logo is provided', () => {
  render(<SubscriptionCard sub={mockSub} />);
  const logo = screen.getByRole('heading', { name: /op/i });
  expect(logo).toBeInTheDocument();

  });

  test('displays subscription status with correct color', () => {
    render(<SubscriptionCard sub={mockSub} />);
    const statusBadge = screen.getByText(/ACTIVE/i);
    expect(statusBadge).toHaveStyle('background-color: #4caf50');
  });

  test('renders subscription formula', () => {
    render(<SubscriptionCard sub={mockSub} />);
    const formula = screen.getByText(/GPT-4 Turbo/i);
    expect(formula).toBeInTheDocument();
  });

  test('displays sync status with correct color', () => {
    render(<SubscriptionCard sub={mockSub} />);
    const syncBadge = screen.getByText(/IN SYNC/i);
    expect(syncBadge).toHaveStyle('background-color: #2196f3');
  });

  test('shows subscription ID', () => {
    render(<SubscriptionCard sub={mockSub} />);
    const id = screen.getByText(/12345/i);
    expect(id).toBeInTheDocument();
  });

 test('handles missing brand gracefully', () => {
  const incompleteSub = { ...mockSub, brand: undefined };
  render(<SubscriptionCard sub={incompleteSub} />);

  // More specific selector
  const brandName = screen.getByRole('heading', { name: /UN/i });
  expect(brandName).toBeInTheDocument();
});

  test('renders with different status colors', () => {
    const statuses = ['ACTIVE', 'SUSPENDED', 'PENDING'];
    const colors = ['#4caf50', '#ff5722', '#ff9800'];

    statuses.forEach((status, index) => {
      const subWithStatus = { ...mockSub, status };
      render(<SubscriptionCard sub={subWithStatus} />);
      const statusBadge = screen.getByText(new RegExp(status, 'i'));
      expect(statusBadge).toHaveStyle(`background-color: ${colors[index]}`);
    });
  });

  test('renders with different sync colors', () => {
    const syncStatuses = ['IN_SYNC', 'NOT_FOUND_S2', 'NOT_FOUND_TEMPTATION'];
    const colors = ['#2196f3', '#f44336', '#9c27b0'];

    syncStatuses.forEach((sync, index) => {
      const subWithSync = { ...mockSub, sync };
      render(<SubscriptionCard sub={subWithSync} />);
      const syncBadge = screen.getByText(new RegExp(sync.replace(/_/g, ' '), 'i'));
      expect(syncBadge).toHaveStyle(`background-color: ${colors[index]}`);
    });
  });
});
