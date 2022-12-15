import { IApiException } from "../models/api-exceptions.model";

/**
 * Classe générique qui sert à créer des erreurs HTTP (ici 400 et 404)
 *
 * On précise que notre classe doit correspondre à l'interface `ApiException`
 *
 * Les mots clés `readonly` servent de raccourci pour `this.property = value`,
 * ils nous empêchent également de modifier ces valeurs par la suite.
 *
 * Ici `this.error = error` et `this.status = status`
 */
export class ApiException implements IApiException {
    constructor(readonly error: any, readonly status: number) { }
}

/**
 * Création d'une 404
 */
export class NotFoundException extends ApiException {
    /**
     * On appelle le `constructor` de la classe parente `Exception`
     */
    constructor(error: any) {
        super(error, 404);
    }
}

/**
 * Création d'une 400
 */
export class BadRequestException extends ApiException {
    /**
     * On appelle le `constructor` de la classe parente `Exception`
     */
    constructor(error: any) {
        super(error, 400);
    }
}

export class UnauthorizedException extends ApiException {
    /**
     * On appelle le `constructor` de la classe parente `Exception`
     */
    constructor(error: any) {
        super(error, 403);
    }
}
