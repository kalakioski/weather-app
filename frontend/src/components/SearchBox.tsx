import { useState } from 'react';

type Props = {
  onSearch: (city: string) => void;
  loading: boolean;
};

export function SearchBox({ onSearch, loading }: Props) {
  const [value, setValue] = useState('');

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!value.trim()) return;
    onSearch(value.trim());
  }

  return (
    <form onSubmit={submit} style={{ display: 'flex', gap: 8 }}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter city..."
      />
      <button disabled={loading}>{loading ? 'Loading...' : 'Search'}</button>
    </form>
  );
}
