import {useQuery} from "@tanstack/react-query";
import {CompanyService} from "./companyService";

export const useCompanies = () => {
    return useQuery({
        queryKey: ['companies-all'],
        refetchOnWindowFocus: false,
        queryFn: async () => CompanyService.getAllCompanies()
    })
}

export const useCompanyById = (companyId) => {
    return useQuery({
        queryKey: ['company-detail'],
        refetchOnWindowFocus: false,
        queryFn: async () => CompanyService.getCompany(companyId)
    })
}