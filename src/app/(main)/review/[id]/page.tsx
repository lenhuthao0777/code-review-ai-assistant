import Context from './_component/context';
import Sidebar from './_component/sidebar';

export default function Page({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  return (
    <div className='flex'>
      <Sidebar />
      <Context />
    </div>
  );
}
