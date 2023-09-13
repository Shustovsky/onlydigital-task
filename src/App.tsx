import { HistoricalSections } from './components/HistoricalSections.tsx';
import { data } from './assets/mock/data.ts';

export function App() {
  return (
    <>
      <HistoricalSections data={data} />
    </>
  );
}
