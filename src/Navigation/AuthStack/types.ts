import { StacknavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Define your stack navigator param list
export type AuthStackParamList = {
    Login: undefined
};

// Define types for navigation props
export type AuthStacknavigationProp<T extends keyof AuthStackParamList> = StacknavigationProp<
    AuthStackParamList,
    T
>;

// Define types for route params
export type AuthStackRouteProp<T extends keyof AuthStackParamList> = RouteProp<
    AuthStackParamList,
    T
>;