# Okta Authentication POC

This project is a Proof of Concept (POC) demonstrating the integration of Okta authentication into a React application. It showcases how to implement user sign-in and sign-out functionality using Okta's authentication services.

## Features

- **User Authentication**: Securely authenticate users using Okta.
- **Sign In/Sign Out**: Demonstrates the process of signing in and out with Okta.
- **Profile Information**: Access user profile information from Okta.

## Prerequisites

- Node.js and npm installed on your machine.
- An Okta developer account. You can sign up for a free account at [developer.okta.com](https://developer.okta.com/).

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/okta-auth-poc.git
   cd okta-auth-poc
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Okta:
   - Create a new application in your Okta dashboard.
   - Update the `oktaConfig` object in `src/config/oktaConfig.ts` with your Okta domain and client ID.

4. Run the application:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

- Click the "Sign In" button to authenticate with Okta.
- Once signed in, you can view your profile information.
- Click "Sign Out" to end your session.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Okta](https://www.okta.com/) for providing robust authentication services.
- [React](https://reactjs.org/) for the front-end framework.