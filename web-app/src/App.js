import React from "react"
import { StyleSheet, Text, View, ScrollView } from "react-native"
import { sideProjects, articles, certifications, openSourceContributions } from "./data"
import { AntDesign } from "react-native-vector-icons/AntDesign"

const Link = ({ name, url, description }) => (
  <View style={styles.linkContainer}>
    <Text href={url} style={styles.linkText}>{name}</Text>
    <Text style={styles.linkdescriptionText}>{"\t" + description}</Text>
    {/* <AntDesign
      name="star"
      color={"black"}
      size={20}
    // style={[styles.icon, { marginTop: size / 2 }]}
    /> */}
  </View>
)

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

        {[
          ["Side Projects", sideProjects],
          ["Articles", articles],
          ["Certifications", certifications],
          ["Open Source Contributions", openSourceContributions],
        ].map(([headLine, links]) => (
          <View style={styles.chapterContainer}>
            <Text style={styles.labelText}>{headLine}</Text>
            {links.map(Link)}
          </View>
        ))}

        {/* TODO add social medias
        resume: https://s3.amazonaws.com/attachments.angel.co/9210750-fbec722a76b0d4ba5e2d765e896bea0d.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIATAVHNKYQ7SKKADZS%2F20231006%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231006T180725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBHaL2pIgxraEwjKcAujiGZFfw9lM43WiP4%2F8Iv0sNnqAiBAa5wJQi8Eck2S3hGA8MfRoaylqQVaX8nts04ajdxRzCqLBQh7EAAaDDIwNzU4MzI3MDQzMyIMKTZkI2RGR1zL%2FmJWKugEsosCH%2BdGK%2BfyEkBhcDgG7D6g5WCcnOIuc9jxMbfkVnYtaCHGp69brb2uT%2FfaGz3wdhS7bTlztQgWwjoZvsjrLMEAUbFQQsyZ%2Bhps%2FQvU3eA7nLyaElQolGcHqleQXKX%2FPejzSi5uApew8tjCsqia24xNvG42BKfMSKZdUfI2TonsSMxgsdff%2FVTfOlLXvtSSB6r8Q3pP5W5OU4KLIAdQK2MHksyBqZjnKD9QO2ENrY5I3ah1E5lz%2Bysi9z2%2FeLD0Lg0b%2BthMn2IMbH4XlqJ4h2xHIPLMGG0Tkw1pmVT792%2BbW6baCBjP54ogU3RLo8RfeHbHe9NN74v%2F7ARW0YoDvpDgTSuMzdBWyzgbAI6Ow%2FwKGsh9t2u2YnOPjW3YhY%2BosjvwKa5ekN0LOsb%2Bcmi92MZffeP1pZXtsa8Uq8PAIK3ZLrqVP4gLCQ3S7jwv4KcwZuJsM%2FPq13cKp54%2FNQK2PR8Nqya2bcb57abDR9zUe2Gj3IZKlGABE2XceBVUvd6S%2FpM3lyMVZkr5Ng80tJdAcmHU6yDS5MhahamUnaZvbb7PWcZfJzD%2FVQOTeckkwr3mP2PsE9CxfZ2AcPvHYs%2BjPBzkCOIhah1uNZK%2Fz6njtu5oFOsHnV6esP7GUwS61vyFhFIjDAhRzc0YvloESiTk%2FheOM9TmWdlqvsV6ze6IfbYxjToRTmYgvQqdU84xuNFAA55qZicL3kwfrcC2oaVylYT%2Bv47KlPrtmvZIKo8oFzc1ot%2B0ADtktJtqGNSSlhfXCKDMSfwBAA95ygt2hZx3rb826Mng7ylREYfHUz5uR15no%2F%2Bb0VghQzDlkIGpBjqbAUjSYFiKnjPuhU92AYe04FE9m2cVHceAGi94LWzOYsrUMBdcHZtx4lY%2BXNFaZzbtCpZu8YxZUiQcSZJVrp%2FD6GHRRTcpukTzcH%2FuNLHf1SDIo%2FpsdaMq3AJzAB6YzTFT1Qn%2BSjYezMXrAUVsyCdh%2FmO%2FftULUhuxqc59%2FSkWnblqaNfQaJmSTIPYrF604pAbyM3rbnHhFtjiv4UM&X-Amz-SignedHeaders=host&X-Amz-Signature=d85b725b3e762a481446f5c61775bcc70839148ef93ff2145c0e70bbfd1351f2
        */}

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
  linkContainer: {
    marginBottom: 10,
  },
  linkText: {
    fontSize: 30,
    lineHeight: 40,
    color: 'rgb(255, 196, 71)',
    alignSelf: "flex-start",
  },
  linkdescriptionText: {
    fontSize: 20,
    // lineHeight: 40,
    color: 'rgb(255, 196, 71)',
    opacity: .8
  },
  footerText: {
    color: "white",
  },
})

export default App
