
export interface Isfeatures {
    imageUrl : string
    imageAlt: string
    beds: number
    baths: number
    title: string
    purpose: string
    formattedPrice: number
    reviewCount: number
    rating: number
    linkName: string
    buttonText: string
}

export interface PropertyFeatures {
   property: {
    coverPhoto: {
        url: string
    }
    price: number
    rentFrequency: number
    rooms: number
    title: string
    baths: number
    area: number
    agency:{
        logo: {
            url: string
        }
    }
    isVerified: boolean
    externalId: number
   }
}