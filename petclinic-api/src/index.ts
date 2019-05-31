import express from "express";
import fileUpload, {UploadedFile} from "express-fileupload";
import * as bodyParser from "body-parser";
import * as petController from "./controllers/petController"

const app = express();
const port = 8080; // puerto por defecto

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

// Usamos la libreria body-parser para poder usar json en el body de los POST
app.use(bodyParser.json());

// Usamos FileUpload
app.use(fileUpload());

// Static content
app.use(express.static("public"));

// definir la ruta principal para nuestra web page
app.get( "/", ( req, res ) => {
    res.send( "Bienvenido al API de PetClinic 1.0");
} );

// API para Pets
app.get("/pet", petController.allPets);
app.get("/pet/:id", petController.getPet);
app.post("/pet", petController.addPet);
app.put("/pet/:id", petController.updatePet);
app.delete("/pet/:id", petController.deletePet);

app.post( "/upload/:id", ( req, res ) => {
    const petId = req.params.id;

    if (Object.keys(req.files).length === 0) {
        return res.status(400).send("No files were uploaded.");
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    const sampleFile = req.files.sampleFile;

    console.log(sampleFile);

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv("public/" + petId + ".jpg", (err: any) => {
        if (err)
            return res.status(500).send(err);

        res.send("File uploaded!");
    });
} );

// Inicializamos el server de Express
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
