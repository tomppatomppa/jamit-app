export const customMapStyle = [
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
]

export const initialRegion = {
  latitude: 60.16020639500048,
  longitude: 24.944589799155526,
  latitudeDelta: 0.0012,
  longitudeDelta: 0.0112,
}

export const defaultImageUri =
  'https://scontent.fqlf1-2.fna.fbcdn.net/v/t39.30808-6/332000508_1634371787001640_2223681153366422458_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=340051&_nc_ohc=hHXvTzug6uwAX_XIln_&_nc_ht=scontent.fqlf1-2.fna&oh=00_AfD7XCzKgEWLvoBIRVOyYBz-uqJvEO4_e3EOh8DKWlfWpw&oe=64132FE7'
