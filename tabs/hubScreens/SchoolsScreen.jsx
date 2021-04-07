import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import SquareButton from '../../components/SquareButton';
import Colors from '../../constants/Colors';

export default function SchoolsScreen() {
  const navigation = useNavigation();
  const [resources, setResources] = useState([]);

  useEffect(() => {
    try {
      const getSchoolResources = async () => {
        const request = await axios.get('http://localhost:3001/resources');
        console.log(request.data);
        const schoolResources = request.data.filter(
          (data) => data.resource_type === 'school',
        );

        setResources(schoolResources);
      };

      getSchoolResources();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const styles = StyleSheet.create({
    container: {
      flexWrap: 'wrap',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: Colors.white,
      width: '100%',
      height: '100%',
    },
    buttonView: {
      width: '45%',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      paddingBottom: 30,
    },
    image: {
      marginTop: '5%',
      marginBottom: '15%',
      width: '100%',
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={require('../../assets/images/Torri.png')}
          style={{
            width: 50,
            height: 50,
            paddingTop: '10%',
            alignSelf: 'center',
          }}
        />
      </View>
      {resources.map(
        ({
          id,
          image,
          icon_name,
          resource_title,
          phone_number,
          email,
          grad_times,
          location,
          report_times,
        }) => (
          <View style={[styles.buttonView]}>
            <SquareButton
              id={id}
              name={icon_name}
              text={resource_title}
              buttonSize={65}
              textSize={13}
              iconSize={38}
              onPress={() => navigation.navigate('Resource', {
                image,
                name: resource_title,
                email,
                location,
                phone: phone_number,
                grad_times,
                report_times,
                // image: require("../../assets/images/HHC.png"),
              })}
            />
          </View>
        ),
      )}
    </View>
  );
}
