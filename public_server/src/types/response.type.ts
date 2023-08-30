import axios, { AxiosResponse } from 'axios'

interface APIResponse<T> {
    statusCode: number 
    errorCode: number 
    message: string 
    data: T
    timestamp: Date
}