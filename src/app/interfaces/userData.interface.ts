export interface LoginPost {
    ok:         boolean;
    token:      string;
    usuario:    UserLoginData;
}

export interface RegisterPost {
    ok:         boolean;
    usuario:    UserLoginData;
}

export interface UserLoginData {
    empresa:    string;
    correo:     string;
    estado:     boolean; 
    google:     boolean;
    nombre:     string;
    role:       string;
    uid:        string;
}

export interface GetterUser {
    nombre:     string,
    correo:     string,
    uid:        string,
    token:      string,
}

export interface UserData {
    logoImg:    string;
    empresa:    string;
    name:       string;
    direction:  string;
    phoneCall:  number;
    whatsapp:   number;
}

export interface QueryUser {
    ok:         boolean;
    results:    ResultsQuery[];
}

export interface ResultsQuery {
    nombre:     string;
    correo:     string;
    role:       string;
    estado:     boolean;
    google:     boolean;
    uid:        string;
}

export interface CreateUser {
    empresa:    string;
    nombre:     string;
    correo:     string;
    password:   string;
}