# What's here?

## A simple Node.js app that calls Marketing Cloud REST APIs

## One-time demo setup

### 1. Add an API Integration component
Add an ```API Integration``` component in Marketing Cloud.

See [API Integration](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/api-integration.htm) for more details.

- Make sure *Perform server-to-server requests* is *checked*.
- Select the Marketing Cloud scope for your API calls

### 2. Set environment variables

1. Get the ```ClientID``` and ```ClientSecret``` from API Integration component and put in the following environment variables on your local computer:
    - ```SFMC_API_CLIENTID=YOUR_CLIENTID```
    - ```SFMC_API_CLIENTSECRET=YOUR_CLIENTSECRET```

See [Get an API Key](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-getting-started.meta/mc-getting-started/get-api-key.htm) for more details.

## Run locally on your computer

The steps below are for MacOS. Modify as needed for your operating system.

### Install Node.js
Download and install Node.js for your operating system: <https://nodejs.org/en/download/>

### Get the source code

> *TIP:* If you have ```Git``` installed then you can do ```git clone https://github.com/sanagama/sfmc-nodejs.git``` instead.

1. Browse to <https://github.com/sanagama/sfmc-restapi-nodejs>
1. Click ```Clone or Download``` then click ```Download ZIP```
1. Save the ZIP file to your ```HOME``` directory as ```~/sfmc-nodejs.zip```
1. Extract the zip file to your ```HOME``` directory ```~/sfmc-nodejs.zip```

### Run the web app

Type the following commands in the ```Terminal``` window to run the web app:

```
cd ~/sfmc-nodejs
npm install
npm run
```

# Looking for more info?

Check out these resources to help you get going:

- Marketing Cloud Developer Center: https://developer.salesforce.com/devcenter/marketing-cloud
- Create an Installed Package: https://sforce.co/InstalledPackage
- Marketing Cloud APIs: https://sforce.co/CloudAPI
- Marketing Cloud SDKs: https://sforce.co/SDK
- Content Block SDK: https://github.com/salesforce-marketingcloud/blocksdk
- Content Builder SDK: https://sforce.co/ContentBuilder
- MobilePush and Journey Builder SDKs: https://sforce.co/MobilePushSDK 
