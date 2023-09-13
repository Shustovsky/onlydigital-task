import { HistoricalSection } from './components/HistoricalSection.tsx';
import { data } from './assets/mock/data.ts';

export function App() {
  return (
    <>
      <HistoricalSection data={data} />
    </>
  );
}
