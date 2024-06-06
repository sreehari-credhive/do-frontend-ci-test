import { Login } from "../components/auth/Login";

const App = () => {
  return (
    <main className="h-screen flex justify-center items-center flex-col">
      <div className="mb-20">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-3">
          Login in to your account
        </h2>
        <Login />
      </div>
    </main>
  );
};

export default App;
