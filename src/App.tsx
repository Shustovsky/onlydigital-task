import { Section } from './components/Section.tsx';
import { data } from './assets/mock/data.ts';

export function App() {
  return (
    <>
      <Section data={data} />
    </>
  );
}
