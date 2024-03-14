import { Icons } from "@components/Icons";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { cn } from "@utils";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserApiClient } from "../../api/apiClient";

const UserAuthForm = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const isSigningUp = location.pathname === "/sign-in";

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    //Create Account
    if (isSigningUp) {
      const { data: res } = await UserApiClient.post("", {
        name,
        email,
        password,
      });

      if (res.data) {
        const { id, name, email } = res.data;
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("currentUserName", name);
        localStorage.setItem("currentUserEmail", email);
        localStorage.setItem("currentUserId", id);
        navigate("/");
      } else {
        alert("Something Went wrong");
        setIsLoading(false);
      }
    } else {
      if (email === "admin@gmail.com" && password === "admin") {
        console.log("Login successful");
        localStorage.setItem("isAuthenticated", "true");
      } else {
        const userExists = await UserApiClient.get(`/exists/${email}`);
        if (userExists) {
          const { data: res } = await UserApiClient.post(`authenticate`, {
            email,
            password,
          });

          if (res.data) {
            const { isAuthenticated, ...userData } = res.data;
            if (isAuthenticated) {
              localStorage.setItem("isAuthenticated", "true");
              const { name, email, userId } = userData;
              localStorage.setItem("currentUserName", name);
              localStorage.setItem("currentUserEmail", email);
              localStorage.setItem("currentUserId", userId);
              navigate("/");
            } else {
              alert("Invalid credentials");
              setIsLoading(false);
            }
          } else {
            alert("Something Went wrong");
            setIsLoading(false);
          }
        }
      }
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid grid-rows-2 gap-8">
          {isSigningUp && (
            <div className="flex flex-col items-start gap-2">
              <Label className="text-black" htmlFor="name">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="name@example.com"
                autoCapitalize="none"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
          )}

          <div className="flex flex-col items-start gap-2">
            <Label className="text-black" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <Label className="text-black" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******"
              type="password"
              autoCapitalize="none"
              autoComplete="current-password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Proceed
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserAuthForm;
