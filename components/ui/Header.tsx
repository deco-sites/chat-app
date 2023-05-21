export interface IProps {
  pageTitle: string;
}

export default function Header({ pageTitle }: IProps) {
  return (
    <div className="w-full flex flex-col mx-auto justify-center gap-4">
      <header className="w-full flex justify-center mx-auto p-6 items-center bg-slate-800">
        <h1 className="text-2xl font-sans font-medium text-white">
          {pageTitle}
        </h1>
      </header>
    </div>
  );
}
