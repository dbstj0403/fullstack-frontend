import axios from 'axios';
import { Product } from '../types/Product';

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// 요청 인터셉터: 토큰 자동 삽입
api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

// 실제 API 호출 정의
export const productService = {
    getAll: (): Promise<Product[]> =>
        api.get('/products').then(res => res.data),

    getById: (id: number): Promise<Product> =>
        api.get(`/products/${id}`).then(res => res.data),

    create: (data: Omit<Product, 'id'>): Promise<Product> =>
        api.post('/products', data).then(res => res.data),

    update: (id: number, data: Partial<Omit<Product, 'id'>>): Promise<Product> =>
        api.put(`/products/${id}`, data).then(res => res.data),

    delete: (id: number): Promise<void> =>
        api.delete(`/products/${id}`).then(() => {}),
};
