/**
 * ManageSpace Audit API
 * ManageSpace Audit API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AuditEntryResponse } from './auditEntryResponse';


export interface GetEntries200Response { 
    data?: Array<AuditEntryResponse>;
    success?: boolean;
    error?: object;
}

