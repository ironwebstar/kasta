# kasta button
1. React Native
2. Typescript
3. Styled components

# How to start project

1. yarn
2. cd ios > pod install
3. cd ..
4. yarn ios

# Project architecture
- Main screen: src/screens/auth/signin/signin.tsx
- Button component (KastaButton): /src/components/kasta-button/kasta-button.tsx

# Screenshots

![14DC7178-23B3-47B6-97EB-F616077088ED](https://user-images.githubusercontent.com/36421515/158732941-fb38fe7c-763d-416d-83af-fe3768132c79.png)
![EC4CD20F-41F3-463C-9F62-684AE0A26605](https://user-images.githubusercontent.com/36421515/158733140-10aaeb35-4954-49d9-9fbe-b3f911529a5c.png)
![284A37CD-1563-40D2-BA12-062573549739](https://user-images.githubusercontent.com/36421515/158733125-ca2b5c3a-298b-4e89-89d6-c720c6894557.png)
![131F71C8-E9C8-441A-B7E2-1A836B71E2D9](https://user-images.githubusercontent.com/36421515/158733202-80665eb4-a7fe-4d8f-a13a-e942f7dea5b0.png)

# Improvement/Difficulties
1. `UI Side`: It's not clear how we go back to `Default` state from `Success` and `Error` state. For now, we can click on `Success` and `Error` button to start again.
2. `API Side`: 
- It's difficult to judge if the payment create is successful or not. Depending on it, we need to set the button to `Error` status. It would be great if we have error response when we fail to create payment.
- It's also difficult to get error cases for payment status. We only have progress - no field for `Success` or `Failure`. So for now, I just assumed the error case when if the progress after some time like 15s is still under 100.(as it is said the progress is increased by 10% every 1s.). We can also inculde error response for payment failures.
