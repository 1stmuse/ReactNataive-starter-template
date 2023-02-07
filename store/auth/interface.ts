/* eslint-disable prettier/prettier */
import { IResponse } from "../finance/interface";
import { Profile } from "./email-username-api";

export interface ProfileResponse extends IResponse {
    meta_data: {
        data: Profile
    }
}

export interface ReferralEarningInfo {
    user_id: number;
    total_amount: number;
    total_amount_expected: number;
    max_id: number;
    loan_earning: number;
    loan_completed: 1 | 0;
    total_earnings: number;
    user_name: string;
    date_joined: string;
}

export interface ReferralEarningsResponse extends IResponse {
    meta_data: {
        data: {
            total_earnings: number;
            total_count: number;
            data: ReferralEarningInfo[],
            next: number;
        }
    };
}