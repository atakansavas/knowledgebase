export interface Company {
    name: string;
    description: string;
    companyInfo: string;
    address: string
}

class initCompany implements Company {
    name = "";
    description = "";
    companyInfo = "";
    address = "";
}

export const InitialCompany = new initCompany()
