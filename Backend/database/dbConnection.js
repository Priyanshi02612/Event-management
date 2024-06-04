import mongoose from 'mongoose';

export const dbConnection = () => {
  mongoose
    .connect(process.env.mongoDbURI, { dbName: 'Event_Management' })
    .then(() => {
      console.log('Connected to database!');
    })
    .catch((error) => {
      console.log('Error while connecting to database', error);
    });
};
