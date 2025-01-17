// Type definitions for content-type v0.0.1
// Project: https://github.com/deoxxa/content-type
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ContentType {
    interface MediaType {
        type: string;
        q?: number | undefined;
        params: any;
        toString(): string;
    }

    interface SelectOptions {
        sortAvailable?: boolean | undefined;
        sortAccepted?: boolean | undefined;
    }

    interface MediaTypeStatic {
        new(s: string, p?: any): MediaType;
        parseMedia(type: string): MediaType;
        splitQuotedString(str: string, delimiter?: string, quote?: string): string[];
        splitContentTypes(str: string): string[];
        select(availableTypes: MediaType[], acceptedTypes: MediaType[], options?: SelectOptions): string;
        mediaCmp(a: MediaType, b: MediaType): number;
    }
}

declare module "content-type" {
    var x: ContentType.MediaTypeStatic;
    export = x;
}
