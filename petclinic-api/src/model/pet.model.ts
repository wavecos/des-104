import mongoose from "mongoose";

const uri: string = "mongodb://localhost:27017/local";

mongoose.connect(uri, (err: any) => {
    if (err) {
        console.log('Hubo un error en la conexion');
    } else {
        console.log('Se hizo la conexion con MongoDB');
    }
});

export const PetSchema = new mongoose.Schema({
    name: { type: String, required: true },
    kind: { type: String, required: true },
    age: { type: Number, required: true },
    breed: { type: String, required: true },
    registerDate: { type: Date, required: false },
    photoUrl: { type: Date, required: false },
    status: { type: String, required: true }
});

const Pet = mongoose.model('Pet', PetSchema);

export default Pet;
