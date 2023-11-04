import AuthButton from "../components/AuthButton";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-center prose ">
      <h1>Web3 x Retire</h1>
      <h3>Get that Lambo</h3>
      <AuthButton />
    </main>
  );
}
