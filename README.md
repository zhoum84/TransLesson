# TransLesson
TransLesson is an app to help transcribe and translate audio into whatever language the user desires. This was initially built to make long college lectures more accessible for those who are hard-of-hearing or have English as a second language. We plan on adding more features for greater language support and open wider avenues for communication. Built for VandyHacks X.

# Features
- Cross-platform app built in React Native that transcribes and translates audio into different languages
- Store, access, and translate older transcriptions
- Simplistic, easy-to-understand UI

# Build
- To build, you need an Expo account and a phone that has the Expo app installed. If you are on Apple, you need to have an Apple Developer account to create a developer build. This will allow access to all features.

Backend
- Run the backend. To work with a mobile device, you need to host it on a website. We used an ngrok tunnel.

Frontend
 - In the frontend folder, assuming an ngrok tunnel and an Expo account:

```
  npm install
  eas build --profile development --platform android
  npx expo start --tunnel
```
