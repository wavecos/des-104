import { Request, Response } from "express";
import Pet from "../model/pet.model";

export let allPets = (req: Request, res: Response) => {
    Pet.find((err: any, pets: Document[]) => {
        if (err) {
            res.send({ status: "ERROR", message: "Hubo un error al obtener las mascotas", result: err });
        } else {
            res.send({ status: "OK", message: "", result: pets });
        }
    });
};

export let getPet = (req: Request, res: Response) => {
    let petId = req.params.id;
    Pet.findById(petId, (err: any, petFinded: any) => {
        if (err) {
            res.send({ status: "ERROR", message: "Hubo un error al obtener la mascota", result: err });
        } else {
            res.send({ status: "OK", message: "", result: petFinded });
        }
    });
};

export let deletePet = (req: Request, res: Response) => {
    let petId = req.params.id;
    Pet.deleteOne({ _id: petId }, (err: any) => {
        if (err) {
            res.send({ error: "Hubo un error al eliminar la mascota" });
        } else {
            res.send( { error: "Se elimino la mascota correctamente" } );
        }
    });
};

export let addPet = (req: Request, res: Response) => {
    var pet = new Pet(req.body);

    pet.save((err: any, petSaved: any) => {
        if (err) {
            console.log(err);
            res.send({ status: "ERROR", message: "Hubo un error al insertar la mascota", result: err });
        } else {
            res.send({ status: "OK", message: "Se inserto la mascota correctamente", result: petSaved });
        }
    });
};

export let updatePet = (req: Request, res: Response) => {
    let petId = req.params.id;
    let petData = req.body;

    Pet.findByIdAndUpdate(petId, petData, (err: any, petOriginal: any) => {
        if (err) {
            res.send({ status: "ERROR", message: "Hubo un error al actualizar la mascota", result: err });
        } else {
            res.send({ status: "OK", message: "Se actualizó la mascota correctamente", result: petOriginal });
        }
    });

};

