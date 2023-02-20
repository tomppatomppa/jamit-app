import { StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import CustomMarker from './src/components/CustomMarker'
const events = [
  {
    id: 518,
    name: 'Muusikkojen liitto',
    shares: 0,
    reactions: {
      likes: 1,
      loves: 0,
      wow: 0,
      cares: 0,
      sad: 0,
      angry: 0,
      haha: 0,
    },
    reaction_count: 1,
    comments: 0,
    content:
      'Tulevan maanantain Join the houseband! -jameissa G Livelab Helsinkissä opiskelijat ja ammattilaiset kohtaavat – ota siis soittimesi mukaan ja tule jammailemaan!House bandissa soittavat Stina Koistinen (laulu), Amanda Blomqvist (rummut ja perkussiot), Juho Kanervo (sello ja basso) ja Markus Pajakkala (puhaltimet, perkussiot, kosketinsoittimet).Soittajien käytössä ovat klubin flyygeli ja rummut sekä mikrofoneja ja vahvistimia. Jameihin on maksuton sisäänpääsy.Jameja ennen klo 16.30 alkaen järjestetään musiikin opiskelijoille suunnattu opiskelijapäivä, jossa keskitytään työelämään liittyviin aiheisiin. Opiskelija, ilmoittaudu mukaan: https://www.muusikkojenliitto.fi/ilmoittaudu-mukaan.../Jamit järjestävät Muusikkojen liitto ja Freelancemuusikot ry.#Muusikkojenliitto #Äänenkannattaja',
    posted_on: '2023-01-20T21:16:59.486209',
    video: [],
    image: [
      'https://scontent.fqlf1-2.fna.fbcdn.net/v/t39.30808-6/323883945_3313335945572452_820931808253465925_n.jpg?stp=c0.7.526.275a_dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=340051&_nc_ohc=Ut2DZWW1It0AX95Ucwh&_nc_ht=scontent.fqlf1-2.fna&oh=00_AfDXBsgdb2jayKLQIIqmrzQAOHazGntd_pntW5yvNqCujA&oe=63D241D7',
    ],
    post_url: 'outside',
    userId: 51,
    location: {
      type: 'Point',
      coordinates: [60.16409145067662, 24.94471876850854],
    },
    createdAt: '2023-02-20T09:25:32.519Z',
    updatedAt: '2023-02-20T09:25:32.519Z',
  },
]
const initialRegion = {
  latitude: 60.16427639500048,
  longitude: 24.944589799155526,
  latitudeDelta: 0.0012,
  longitudeDelta: 0.0112,
}
export default function App() {
  return (
    <View style={styles.container}>
      <MapView initialRegion={initialRegion} style={styles.map}>
        {events.map((event, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: event.location.coordinates[0],
              longitude: event.location.coordinates[1],
            }}
          >
            <CustomMarker title={event.name} />
          </Marker>
        ))}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
})
