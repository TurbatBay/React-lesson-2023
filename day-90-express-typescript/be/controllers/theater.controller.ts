import TheaterModel from "../models/theaters.model";
import {Request, Response} from "express";
export const getTheaters = async (req: Request, res: Response) => {
    try {
        const theaters = await TheaterModel.find({});
        res.status(200).json(theaters);
    } catch (error) {
        res.status(404).json({ data: [] });
    }
}

export const getTheatersById = async (req: Request, res: Response) => {
    try {
        const theater = await TheaterModel.find({ theaterId: Number(req.params.id)});
        res.status(200).json(theater);
    } catch (error) {
        res.status(404).json({ data: [] });
    }
}
 
export const searchTheaters = async (req: Request, res: Response) => {
    try {
        console.log(req.query.keyword)
        const city = await TheaterModel.find({ "location.address.city": req.query.keyword });
        res.status(200).json(city);
    } catch (error) {
        res.status(404).json({ data: [] });
    }
}

//test