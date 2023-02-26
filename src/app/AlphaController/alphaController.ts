import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import * as https from 'node:https';

export default function getAssets(req: Request, res: Response) {
    const assets = req.query.assets
    const url = process.env.ALPHA_API_URL + endpoints.daily + "&symbol=" + assets + `&apikey=${process.env.ALPHA_API_KEY}`

    console.log(url)
    https.get(url, (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
      
        res.on('data', (d) => {
          process.stdout.write(d);
        });
      
    }).on('error', (e) => {
        console.error(e);
    });

    return res.json({
        response: 200
    });
}

const endpoints = {
    daily: "TIME_SERIES_DAILY_ADJUSTED"
}

