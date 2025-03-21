import React, { useRef } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, FlatList, KeyboardAvoidingView } from 'react-native';
import { Video } from 'expo-av';
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Card } from "react-native-paper";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome5 } from "@expo/vector-icons";


const leaders = [
  {
    name: "Mr Bantu Holomisa, MP",
    title: "President",
    description:
      "Bantubonke Holomisa was born the son of Tembu Chief Bazindlovu Holomisa on 25 July 1955 in the Mqanduli district of Transkei...",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Mr Nqabayomzi Kwankwa",
    title: "Deputy President",
    description:
      "Mr NLS Kwankwa was born in Middledrift (now iXesi) in the Eastern Cape. He grew up in a politically active environment in all the county district...",
    image: "https://via.placeholder.com/150",
  },
];

const data = [
  {
    date: "04 Jun 2018",
    title: "Round 2 of Mr Ndara’s ordeal with @WesBank. #WesBank vacillates on the immoral...",
    description: "Dear Mr De Kock EXPRESSION OF CONCERN: CONDUCT OF THE BANK IN THE MATTER OF MR NDARA The email from Mr..."
  },
  {
    date: "04 Jun 2018",
    title: "Allegations of misconduct against the Nelson Mandela Bay city manager Mr Johann...",
    description: "OPEN LETTER TO NMBM SPEAKER LAWACK The Speaker of Council NMBM Attention: Councillor Lawack RE..."
  },
  {
    date: "31 May 2018",
    title: "@PresidencyZA, UDM writes to #PresidentRamaphosa abt #corruptio...",
    description: "Dear Mr De KoMr CM Ramaphosa President of the Republic of South Africa Union Buildings Private Bag X 1000 Pretoria..."
  }
];

const articles = [
  {
    id: '1',
    title: 'NPA drops the case and Mduduzi Manana resigns as',
    date: '31 May 2018',
    description: "The United Democratic Movement Women’s Organisation (UDEMWO) is left pondering over the sudden resignation...",
    image: require('./assets/new.png'),
  },
  {
    id: '2',
    title: 'UDM notes minister PIC independent',
    date: '30 May 2018',
    description: "Media release by Mr B and UDM President Democratic Movement minister Nhlanhla...",
    image: require('./assets/new.png'),
  },
];

const victories = [
  {
    id: "1",
    title: "UDM Victory on the Campaign for Transparent and Equitable Party Funding",
    description:
      "Since its inception, the UDM has advocated for transparency in party funding...",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: require('./assets/new.png'),
  },
  // {
  //   id: "2",
  //   title: "UDM Victory on the Establishment of the Commission",
  //   description:
  //     "In May 2018, the UDM wrote to President Ramaphosa regarding the Public Investment Corporation...",
  //     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  //   thumbnail: require('./assets/new.png'),
  // },
];

const VictoryCard = ({ item }) => (
  <View style={styles.ncard}>
    <Video
      source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }} // Online video
      useNativeControls // Show play, pause, seek controls
      resizeMode="contain" // Adjust video scaling
      shouldPlay // Autoplay
      isLooping // Loop video
      style={{ width: '100%', height: 200, alignSelf: 'center' }} />
    <Text style={styles.ntitle}>{item.title}</Text>
    <Text style={styles.ndescription}>{item.description}</Text>
    <TouchableOpacity style={styles.nreadMoreButton}>
      <Text style={styles.nreadMoreText}>Read more →</Text>
    </TouchableOpacity>
  </View>
);

const NewsCard = ({ item }) => (
  <View style={styles.acard}>
    <Image source={item.image} style={styles.aimage} />
    <Text style={styles.adate}>{item.date}</Text>
    <Text style={styles.atitle}>{item.title}</Text>
    <Text style={styles.adescription}>{item.description}</Text>
    <TouchableOpacity>
      <Text style={styles.areadMore}>Read more →</Text>
    </TouchableOpacity>
  </View>
);


const App = () => {
  const videoRef = useRef(null);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      {/* Header */}
      <View style={{ backgroundColor: "#2E7D32", padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 60 }}>
        <FontAwesome name="bars" size={20} color="white" />
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>United Democratic Movement</Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <FontAwesome name="search" size={20} color="white" />
          <MaterialIcons name="notifications" size={20} color="white" />
        </View>
      </View>

      {/* Banner */}
      <Image source={require('./assets/udm.png')} style={{ width: '100%', height: 450, resizeMode: "stretch" }} />


      {/* 27 Years Section */}
      <View style={{ backgroundColor: "#FFD54F", padding: 15, alignItems: "center", marginTop: 24 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>27 UDM 1997-2024</Text>
        <Text style={{ textAlign: "center", marginTop: 5 }}>Your voice matters. Unite with us and create a change you want to see.</Text>
      </View>

      {/* Buttons with Cards */}
      <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 5, marginTop: 12 }}>
        {[{ icon: "dashboard", text: "Dashboard" }, { icon: "handshake-o", text: "Volunteer" }, { icon: "dollar", text: "Make Donation" }].map((item, index) => (
          <View key={index} style={{ backgroundColor: "#E0E0E0", padding: 15, borderRadius: 10, alignItems: "center", elevation: 3, width: 100 }}>
            <FontAwesome name={item.icon} size={30} color="#2E7D32" />
            <Text style={{ marginTop: 5 }}>{item.text}</Text>
          </View>
        ))}
      </View>

      {/* UDM Constitution */}
      <View style={{ flexDirection: "row", backgroundColor: "#E0E0E0", alignItems: "center", padding: 15, borderRadius: 10, margin: 10 }}>
        <Image source={require('./assets/new.png')} style={{ width: 100, height: 100, resizeMode: "contain" }} />
        <View style={{ flex: 1, paddingLeft: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>UDM CONSTITUTION</Text>
          <Text style={{ marginTop: 5 }}>Download Brochure</Text>
          <TouchableOpacity style={{ backgroundColor: "#2E7D32", padding: 10, borderRadius: 5, marginTop: 10, alignSelf: "flex-start" }}>
            <Text style={{ color: "#fff" }}>CLICK HERE</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* UDM Structure */}
      <View style={{ padding: 15, alignItems: "center", backgroundColor: "#E0E0E0", marginBottom: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>UDM STRUCTURE</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%" }}>
          {[{ name: "UDMYV", img: require("./assets/new.png") }, { name: "UDEMWO", img: require("./assets/new.png") }, { name: "UDESMO", img: require("./assets/new.png") }].map((item, index) => (
            <View key={index} style={{ alignItems: "center" }}>
              <Image source={item.img} style={{ width: 70, height: 70, marginBottom: 5 }} />
              <TouchableOpacity style={{ backgroundColor: "#FFC107", padding: 5, borderRadius: 8 }}>
                <Text style={{ color: "#000", fontWeight: "bold" }}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>

      {/* PARTY LEADERS */}
      <Text style={styles.aheader}>MEET OUR PARTY LEADERS</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
        {leaders.map((leader, index) => (
          <View key={index} style={styles.acontainer}>
            <Card style={styles.card}>
              <Image source={require('./assets/new.png')} style={styles.image} />
              <View style={styles.content}>
                <Text style={styles.name}>{leader.name}</Text>
                <Text style={styles.title}>{leader.title}</Text>
                <Text style={styles.description}>{leader.description}</Text>
                <TouchableOpacity>
                  <Text style={styles.readMore}>Read more →</Text>
                </TouchableOpacity>
              </View>
            </Card>
          </View>
        ))}
      </ScrollView>

      {/* Buttons with Cards */}
      <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 5, marginTop: 12 }}>
        {[{ icon: "dashboard", text: "Event" }, { icon: "eye", text: "Vision & Mission" }, { icon: "user", text: "Became A Member" }].map((item, index) => (
          <View key={index} style={{ backgroundColor: "#E0E0E0", padding: 15, borderRadius: 10, alignItems: "center", elevation: 3, width: 100 }}>
            <FontAwesome name={item.icon} size={30} color="#2E7D32" />
            <Text style={{ marginTop: 5 }}>{item.text}</Text>
          </View>
        ))}
      </View>

      {/* UDM Victories (Videos) */}
      <View style={styles.ncontainer}>
        <Text style={styles.nheader}>UDM VICTORIES</Text>
        <FlatList
          data={victories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <VictoryCard item={item} />}
        />
      </View>

      {/* Photo Gallery */}
      <Text style={styles.aheader}>PHOTO GALLERY</Text>
      <ScrollView horizontal>
        <Image source={require('./assets/new.png')} style={{ width: 300, height: 300, margin: 5, borderRadius: 24 }} />
        <Image source={require('./assets/new.png')} style={{ width: 300, height: 300, margin: 5, borderRadius: 24 }} />
      </ScrollView>

      {/* UDM MEMBERSHIP */}
      <View style={{ flexDirection: "row", backgroundColor: "green", alignItems: "center", padding: 15, borderRadius: 10, margin: 10 }}>
        <Image source={require('./assets/new.png')} style={{ width: 100, height: 100, resizeMode: "contain" }} />
        <View style={{ flex: 1, paddingLeft: 10, alignItems: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: 'white' }}>UDM MEMBERSHIP FORM</Text>
          <TouchableOpacity style={{ backgroundColor: "#FFFFFF", padding: 10, borderRadius: 20, marginTop: 10, alignItems: 'center' }}>
            <Text style={{ color: "#000000", fontWeight: "bold" }}>JOIN US FOR A CAUSE</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Open Letters */}
      <Text style={styles.aheader}>UDM OPEN LETTERS</Text>

      <ScrollView style={styles.containers}>
        {data.map((item, index) => (
          <View key={index} style={styles.cards}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.titles}>{item.title}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View more</Text>
            </TouchableOpacity>
            <Text style={styles.descriptions}>{item.description}</Text>

          </View>
        ))}
      </ScrollView>

      {/* Register */}
      <View style={{ flexDirection: "row", backgroundColor: "green", alignItems: "center", padding: 15, borderRadius: 10, margin: 10 }}>
        <Image source={require('./assets/new.png')} style={{ width: 100, height: 100, resizeMode: "contain" }} />
        <View style={{ flex: 1, paddingLeft: 10, alignItems: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: 'white' }}>Check where you are registered to voteM</Text>
          <TouchableOpacity style={{ backgroundColor: "#FFFFFF", padding: 10, borderRadius: 20, marginTop: 10, alignItems: 'center' }}>
            <Text style={{ color: "#000000", fontWeight: "bold" }}>CLICK HERE</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Shorts Spotlight */}
      <Text style={styles.aheader}>SPORTS SPOTLIGHT</Text>
      <Video ref={videoRef}
        source={{ uri: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4' }} // Online video
        useNativeControls // Show play, pause, seek controls
        resizeMode="contain" // Adjust video scaling
        shouldPlay // Autoplay
        isLooping // Loop video
        style={{ width: '90%', height: 200, alignSelf: 'center' }} />

      {/* Public */}
      <View style={{ flexDirection: "row", backgroundColor: "green", alignItems: "center", padding: 15, borderRadius: 10, margin: 10 }}>
        <Image source={require('./assets/new.png')} style={{ width: 100, height: 100, resizeMode: "contain" }} />
        <View style={{ flex: 1, paddingLeft: 10, alignItems: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: 'white' }}>PUBLIC ADMINISTRATION GLOBAL FORUM</Text>
          <Text style={{ marginTop: 5, color: 'white' }}>Discover answers,ask quetions and connect globally.</Text>
          <TouchableOpacity style={{ backgroundColor: "#FFFFFF", padding: 10, borderRadius: 20, marginTop: 10, alignItems: 'center' }}>
            <Text style={{ color: "#000000", fontWeight: "bold" }}>JOIN US</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Latest News & Articles */}
      <View style={styles.acontainer}>
        <Text style={{
          fontSize: 22,
          fontWeight: 'bold',
          color: 'green',
          marginBottom: 10,
        }}>LATEST NEWS & ARTICLES</Text>
      
        <FlatList
          data={articles}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={({ item }) => <NewsCard item={item} />}
          showsHorizontalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          //nestedScrollEnabled={true}
        />
        
      </View>

      {/* Buttons with Cards */}
      <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 5, marginTop: 12 }}>
        {[{ icon: "dashboard", text: "Feedback" }, { icon: "gavel", text: "Report Corruption" }].map((item, index) => (
          <View key={index} style={{ backgroundColor: "#E0E0E0", padding: 15, borderRadius: 10, alignItems: "center", elevation: 3, width: 100 }}>
            <FontAwesome name={item.icon} size={30} color="#2E7D32" />
            <Text style={{ marginTop: 5 }}>{item.text}</Text>
          </View>
        ))}
      </View>

      {/* Footer Navigation */}
      <View
        style={{
          marginTop: 18,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#EAEAEA",
          paddingVertical: 10,
        }}
      >
        <NavItem icon="home" label="Home" active />
        <NavItem icon="newspaper" label="News" />
        <NavItem icon="user-circle" label="Dashboard" />
        <NavItem icon="wallet" label="Donation" />
        <NavItem icon="calendar-alt" label="Events" />
      </View>
    </ScrollView>
  );
};

const NavItem = ({ icon, label, active }) => {
  return (
    <TouchableOpacity style={{ alignItems: "center" }}>
      <FontAwesome5
        name={icon}
        size={24}
        color={active ? "#D84315" : "#333"}
      />
      <Text style={{ color: active ? "#D84315" : "#333", marginTop: 4 }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    width: 250,
    marginRight: 15,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 150,
  },
  content: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: "#555",
    marginBottom: 5,
  },
  readMore: {
    fontSize: 12,
    color: "#d9534f",
    fontWeight: "bold",
  },
  containers: {
    backgroundColor: "#fff",
    padding: 15,
    marginEnd: 18,
    marginTop: 10,
    marginStart: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  cards: {
    padding: 2,
  },
  date: {
    color: "red",
    fontSize: 14,
    marginBottom: 5
  },
  titles: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#005f23"
  },
  descriptions: {
    fontSize: 14,
    color: "#333",
    marginVertical: 5
  },
  button: {
    backgroundColor: "#e57373",
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: "flex-start",
    borderRadius: 5,
    marginTop: 5
  },
  buttonText: {
    color: "#fff",
    fontSize: 14
  },
  acontainer: {
    flex: 1,
    padding: 16,
  },
  aheader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
    paddingStart: 16,
  },
  acard: {
    width: 250,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  aimage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  adate: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
  atitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 5,
  },
  adescription: {
    fontSize: 14,
    color: 'black',
    marginTop: 5,
  },
  areadMore: {
    color: 'red',
    marginTop: 5,
  },
  abuttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  abutton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  abuttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 8,
  },
  ncontainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  nheader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2d7d3e",
    marginBottom: 16,
  },
  ncard: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  nvideoThumbnail: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 8,
  },
  ntitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2d7d3e",
  },
  ndescription: {
    fontSize: 14,
    color: "#555",
    marginVertical: 8,
  },
  nreadMoreButton: {
    alignSelf: "flex-start",
    paddingVertical: 4,
  },
  nreadMoreText: {
    color: "#e74c3c",
    fontSize: 14,
  },
});

export default App;
