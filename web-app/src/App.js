import React from "react"
import { StyleSheet, Text, View, ScrollView } from "react-native"

const sideProjects = [
  {
    name: "UraBot",
    url: "https://twitter.com/UraniumStockBot"
  },
  {
    name: "YooMoney",
    url: "https://twitter.com/YooMoneyApp"
  }
]
const articles = [
  {
    name: "NSQ with Docker in baby steps less than 70 lines of code",
    url: "https://victoralmeidabarros.medium.com/nsq-with-docker-in-baby-steps-70-lines-of-code-381ac37eaf58"
  },
  {
    name: "Developing a MiniApp for the Klutch Credit Card",
    url: "https://victoralmeidabarros.medium.com/developing-a-miniapp-for-the-klutch-credit-card-df33f014183e"
  },
  {
    name: "Install Docker with one single command (Debian and Ubuntu)",
    url: "https://victoralmeidabarros.medium.com/install-docker-with-one-single-command-debian-and-ubuntu-ce021df0f976"
  },
]
const certifications = [
  {
    name: "CS50, Harvard",
    url: "https://certificates.cs50.io/3fc935e2-a295-47c9-9dd4-3658ddfb84e7"
  },
  {
    name: "English, Duolingo",
    url: "https://certs.duolingo.com/708c9de8137952ac95900efb90a31002"
  },
]
const openSourceContributions = [
  {
    name: "dgrijalva/jwt-go",
    url: "https://github.com/dgrijalva/jwt-go/issues/450"
  },
  {
    name: "nsqio/nsq",
    url: "https://github.com/nsqio/nsq/pull/1243"
  },
  {
    name: "nsqio/nsqio.github.io",
    url: "https://github.com/nsqio/nsqio.github.io/pull/60"
  },
  {
    name: "PacktPublishing/Learn-Go-in-3-Hours",
    url: "https://github.com/PacktPublishing/Learn-Go-in-3-Hours/pull/3"
  },
]

const Link = ({ name, url }) => <Text href={url} style={styles.linkText}>{name}</Text>

const Line = () => (
  <View style={{ height: 20, overflow: "hidden", marginVertical: 30 }}>
    <Text style={{ color: "lightgrey" }}>{"=".repeat(1000)}</Text>
  </View>
)
const App = () => (
  <View style={styles.root}>

    <ScrollView style={styles.body} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <View>
        <Text style={styles.headerText}>
          Welcome
          {"\n"}
          This is Victor Barros' web site
        </Text>

        <Line />

        <View style={styles.chapterContainer}>
          <Text style={styles.labelText}>Side Projects</Text>
          {sideProjects.map(Link)}
        </View>

        <View style={styles.chapterContainer}>
          <Text style={styles.labelText}>Articles</Text>
          {articles.map(Link)}
        </View>

        <View style={styles.chapterContainer}>
          <Text style={styles.labelText}>Certifications</Text>
          {certifications.map(Link)}
        </View>

        <View style={styles.chapterContainer}>
          <Text style={styles.labelText}>Open Source Contributions</Text>
          {openSourceContributions.map(Link)}
        </View>

        {/* TODO add social medias */}

        <Line />

      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText} href={"https://github.com/victorabarros/victorabarros/"}>
          Source available on Github
        </Text>
      </View>
    </ScrollView>
  </View>
)

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#242729",
    alignItems: "center",
    flex: 1,
  },
  body: {
    width: "80%",
    paddingTop: 80,
    flex: 1,
  },
  chapterContainer: {
    padding: 20
  },
  footerContainer: {
    alignItems: "center",
    paddingVertical: 15,
  },
  headerText: {
    fontSize: 50,
    fontWeight: 500,
    color: 'rgb(255, 196, 71)',
    marginVertical: 10,
  },
  labelText: {
    color: "white",
    lineHeight: 50,
    fontSize: 30,
  },
  linkText: {
    fontSize: 20,
    lineHeight: 40,
    color: 'rgb(255, 196, 71)',
    alignSelf: "flex-start",
  },
  footerText: {
    color: "white",
  },
})

export default App
