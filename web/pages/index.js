import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pressable } from 'react-native-web';
import { theme } from '../styles';
import { SIDE_PROJECTS, ARTICLES, OPEN_SOURCE_CONTRIBUTIONS, CERTIFICATIONS, PROFESSIONAL_ASSOCIATIONS, SOCIAL_MEDIAS } from '../data';

const Item = ({id, label, url}) =>(
    <Pressable key={id-label} style={styles.itemTextContainer} onPress={() => window.open(url)}>
    <Text style={styles.itemText} >{label}</Text>
    </Pressable>
  )

function HorizontalLine() {
  const styles = StyleSheet.create({
    container:{
      overflow: 'hidden',
      flexDirection: 'row',
      marginVertical: 10,
    },
    line:{
      opacity: .4,
      color: theme.gray,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.line}>{"===".repeat(100)}</Text>
    </View>
  );
}

const SocialMedias = ({id, url, icon}) => (
    <View>
      <Text key={id-url}>{url}</Text>
    </View>
  )

export default function IndexPage() {
  return (
    <View style={styles.root}>
        <Text style={styles.headLine}>Victor Barros</Text>
        <Text style={styles.title}>Software Cypherpunl Freedom</Text>
        <HorizontalLine />

<View style={styles.section}>
        <Text style={styles.title}>Bio</Text>
        <Text style={[styles.itemText,{
      color: theme.gray,
  }]}>
        Currently working at
        <Text style={{
      color: theme.orange,
        }}
        > Superhuman</Text>
        </Text>
</View>

<View style={styles.section}>
        <Text style={styles.title}>Side Projects</Text>
          {SIDE_PROJECTS.map((item) => (
            <Item {...item} />
          ))}
</View>

<View style={styles.section}>
        <Text style={styles.title}>Articles</Text>
          {ARTICLES.map((item) => (
            <Item {...item} />
          ))}
</View>

<View style={styles.section}>
        <Text style={styles.title}>Open Source Contributions</Text>
          {OPEN_SOURCE_CONTRIBUTIONS.map((item) => (
            <Item {...item} />
          ))}
</View>

<View style={styles.section}>
        <Text style={styles.title}>Certifications</Text>
          {CERTIFICATIONS.map((item) => (
            <Item {...item} />
          ))}
</View>

<View style={styles.section}>
        <Text style={styles.title}>Professional Membership</Text>
          {PROFESSIONAL_ASSOCIATIONS.map((item) => (
            <Item {...item} />
          ))}
</View>

        <HorizontalLine />

        {SOCIAL_MEDIAS.map((item) => (
          <SocialMedias {...item} />
        ))}

    </View>
  );
}

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: 'rgb(24, 26, 27)',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  headLine:{
    color: theme.orange,
    fontSize: 50,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
  },
  section:{
marginVertical: 15,
  },
  title:{
    fontSize: 25,
    color: theme.gray,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  itemTextContainer: {
    marginVertical: 8,
    marginLeft: 15,
    alignSelf: 'flex-start',
  },
  itemText: {
    color: theme.orange,
    fontSize: 22,
    fontFamily: 'Times New Roman',
  },
});
