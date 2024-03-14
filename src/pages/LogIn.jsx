import UserAuthForm from "@components/Auth/UserAuthForm";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <section className=" grid place-items-center">
      <div className="grid place-items-center">
        <div className="lg:p-8 border bg-white shadow-xl">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Log In</h1>
              <p className="text-sm text-muted-foreground">
                Enter credential to login
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              <Link
                to={'/sign-in'}
                className="underline underline-offset-4 hover:text-primary"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
