import { useOktaAuth } from "@okta/okta-react";

export function Home() {
  const { oktaAuth, authState } = useOktaAuth();

  const handleSignIn = async () => {
    try {
      await oktaAuth.signOut();
      const authParams = {
        scopes: ["openid", "profile", "email"],
      };
      await oktaAuth.signInWithRedirect(authParams);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error details:", {
          message: error.message,
          name: error.name,
          stack: error.stack,
        });
      }
    }
  };

  if (!authState) return <div>Loading...</div>;

  if (!authState.isAuthenticated) {
    return <button onClick={handleSignIn}>Sign In with Okta</button>;
  }

  const userName = authState.idToken?.claims.name ?? "User";

  return (
    <>
      <h1>Welcome, {userName}</h1>
      <div>
        <button onClick={() => oktaAuth.signOut()}>Logout</button>
      </div>
    </>
  );
}
