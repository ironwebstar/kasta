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
![9CA81F6A-9572-4D0B-8372-D7680608E82C](https://user-images.githubusercontent.com/36421515/160219591-463306d9-1b32-4529-a782-7794c8190ee1.png)
![4DBC436E-5887-4078-BACB-A7890A4B7B63](https://user-images.githubusercontent.com/36421515/160219617-764663f6-b08f-438e-b503-1926581dc37f.png)
![9B7BA0F0-DA8D-4182-8B21-8FC1ACE44AF3](https://user-images.githubusercontent.com/36421515/160219627-be233303-95f9-46f7-9497-f321c8a59b5b.png)


# Improvement/Difficulties
1. `UI Side`: It's not clear how we go back to `Default` state from `Success` and `Error` state. For now, we can click on `Success` and `Error` button to start again.
2. `API Side`: 
- It's difficult to judge if the payment create is successful or not. Depending on it, we need to set the button to `Error` status. It would be great if we have error response when we fail to create payment.
- It's also difficult to get error cases for payment status. We only have progress - no field for `Success` or `Failure`. So for now, I just assumed the error case when if the progress after some time like 15s is still under 100.(as it is said the progress is increased by 10% every 1s.). We can also inculde error response for payment failures.
