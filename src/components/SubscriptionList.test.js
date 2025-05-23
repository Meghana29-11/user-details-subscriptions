import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { within } from '@testing-library/react';
import SubscriptionList from './SubscriptionList';

const mockData = {
  source: 'External ABC',
  subscriptions: [
     { id: "123456789_A", brand: "AD", formula: "AD_P", status: "Active", sync: "✔In sync" },
     { id: "123456789_A", brand: "HLN", formula: "AD_P", status: "Suspended", sync: "⚠Out of sync" },
     { id: "123456789_A", brand: "VK", formula: "VK_D", status: "Active", sync: "❗Not found in S2" },
     { id: "123456789_A", brand: "", formula: "", status: "Expired", sync: "❗Not found in Temptation" },
     { id: "123456789_A", brand: "PAR", formula: "HP_P", status: "Suspended", sync: "✔In sync" },
     { id: "123456789_A", brand: "PAR", formula: "HP_D", status: "Active", sync: "✔In sync" }
  ]
};

describe('SubscriptionList', () => {
  test('renders subscription list with correct headers', () => {
    render(<SubscriptionList />);
    expect(screen.getByText(/ID/i)).toBeInTheDocument();
    expect(screen.getByText(/BRAND/i)).toBeInTheDocument();
    expect(screen.getByText(/FORMULA/i)).toBeInTheDocument();
    expect(screen.getByText(/STATUS/i)).toBeInTheDocument();

    // Fix for SYNC header
  const syncElements = screen.getAllByText(/SYNC/i);
  expect(syncElements.length).toBeGreaterThan(0);
  });

  test('displays correct number of subscriptions', () => {
    render(<SubscriptionList />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(mockData.subscriptions.length + 1); // +1 for the header row
  });

test('shows subscription data correctly', () => {
  render(<SubscriptionList />);

  mockData.subscriptions.forEach(sub => {
    const rows = screen.getAllByRole('row');

    const matchingRow = rows.find(row =>
      row.textContent.replace(/\s+/g, '') ===
      `${sub.id}${sub.brand}${sub.formula}${sub.status}${sub.sync}`.replace(/\s+/g, '')
    );

    expect(matchingRow).toBeInTheDocument();
    if (sub.brand) {
      expect(within(matchingRow).getByText(sub.brand)).toBeInTheDocument();
    }
    if (sub.formula) {
      expect(within(matchingRow).getByText(sub.formula)).toBeInTheDocument();
    }
  });
});



  test('renders source information', () => {
    render(<SubscriptionList />);
    expect(screen.getByText(/🔲 Source: External ABC/i)).toBeInTheDocument();
  });

  test('applies correct badge classes based on sync status', () => {
  render(<SubscriptionList />);
  
  mockData.subscriptions.forEach(sub => {
    // Get the row for the subscription
    const row = screen.getAllByRole('row').find(r => 
      r.textContent.replace(/\s+/g, '') ===
      `${sub.id}${sub.brand}${sub.formula}${sub.status}${sub.sync}`.replace(/\s+/g, '')
    );

    expect(row).toBeInTheDocument();

    // Find the sync badge container in that row
    const syncBadge = within(row).getByText((_, el) => 
      el.classList.contains('sync-badge') && el.textContent === sub.sync
    );

    if (sub.sync.includes('In sync')) {
      expect(syncBadge).toHaveClass('green');
    } else if (sub.sync.includes('Out of sync')) {
      expect(syncBadge).toHaveClass('orange');
    } else if (sub.sync.includes('Not found')) {
      expect(syncBadge).toHaveClass('red');
    }
  });
});
});
