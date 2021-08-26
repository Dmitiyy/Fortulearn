import mongoose from 'mongoose';

type TConnection = {isConnected: Number};

const connectToDatabase = async (): Promise<number> => {
  const connectionString: any = process.env.mongodbConnection;
  const connection: TConnection = {isConnected: 0};

  if (connection.isConnected === 1) {return 1};

  const db = await mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  connection.isConnected = db.connection.readyState;

  return db.connection.readyState;
}

export default connectToDatabase;