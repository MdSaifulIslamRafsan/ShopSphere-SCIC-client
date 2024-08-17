## Installation Steps:- 

- Clone the Repository:

```sh
git clone https://github.com/MdSaifulIslamRafsan/SOULMATE-client-side.git
cd SOULMATE-client-side
```

- Install Dependencies:

```sh
npm install
```

- Set Up Environment Variables:
Create a .env file in the root directory and add the following:

```sh
# Firebase Configuration
VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your_firebase_auth_domain
VITE_PROJECTID=your_firebase_project_id
VITE_STORAGEBUCKET=your_firebase_storage_bucket
VITE_MESSAGINGSENDERID=your_firebase_messaging_sender_id
VITE_APPID=your_firebase_app_id

# Image Hosting Service Configuration
VITE_IMAGE_HOSTING_KEY=your_image_hosting_key

# Payment Gateway Configuration
VITE_PAYMENT_GATEWAY=your_payment_gateway_key

# Base URL of the Application
VITE_BASEURL=your_base_url

```
- Run the Application:

```sh
npm run dev
```


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
