import mongoose from "mongoose";
import config from './config.js';
import { error } from "console";

const URI = config.mongo_uri;

mongoose
    .connect(URI)
    .then(() => console.log('connected to data base'))
    .catch(error) => console.log(error);