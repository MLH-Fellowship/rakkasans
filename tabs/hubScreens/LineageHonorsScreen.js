import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { Card, CardItem, Body } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

export default function LineageHonorsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>187th Infantry Regiment</Text>

        <Card>
          <CardItem>
            <Text style={styles.title}>Lineage</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                Constituted 12 November 1942 in the Army of the United States as
                the 187th Glider Infantry,
              </Text>
              <Text>
                Assigned 25 February 1943 to the 11th Airborne Division and
                activated at Camp Mackall, North Carolina
              </Text>
              <Text>Allotted 15 November 1948 to the Regular Army,</Text>
              <Text>
                Reorganized and redesignated 30 June 1949 as the 187th Airborne
                Infantry,
              </Text>
              <Text>
                Relieved 1 February 1951 from assignment to the 11th Airborne
                Division,
              </Text>
              <Text>Assigned 1 July 1956 to the 101st Airborne Division,</Text>
              <Text>
                Relieved 25 April 1957 from assignment to the 101st Airborne
                Division; concurrently reorganized and redesignated as the 187th
                Infantry, a parent regiment under the Combat Arms Regimental
                System,
              </Text>
              <Text>
                Withdrawn 1 October 1983 from the Combat Arms Regimental System
                and reorganized under the United States Army Regimental System
              </Text>
            </Body>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Body>
              <Text style={styles.title}>Honors</Text>
              <Text>Campaign Participation Credit</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                World War II: New Guinea; Leyte; Luzon (with arrowhead),
              </Text>
              <Text>
                Korean War: UN Offensive (with arrowhead); CCF Intervention;
                First UN Counteroffensive (with arrowhead); CCF Spring
                Offensive; Korea, Summer-Fall 1952; Korea, Summer 1953,
              </Text>
              <Text>
                Vietnam: Counteroffensive, Phase III; Tet Counteroffensive;
                Counteroffensive, Phase IV; Counteroffensive, Phase V;
                Counteroffensive, Phase VI; Tet 69/Counteroffensive; Summer-Fall
                1969; Winter-Spring 1970; Sanctuary Counteroffensive;
                Counteroffensive, Phase VII; Consolidation I; Consolidation II,
              </Text>
              <Text>
                Southwest Asia: Defense of Saudi Arabia; Liberation and Defense
                of Kuwait
              </Text>
            </Body>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Text style={styles.title}>Decorations</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Presidential Unit Citation (Army) for TAGAYTAY RIDGE,</Text>
              <Text>Presidential Unit Citation (Army) for SUKCHON,</Text>
              <Text>Presidential Unit Citation (Army) for TRANG BANG,</Text>
              <Text>
                Presidential Unit Citation (Army) for DONG AP BIA MOUNTAIN,
              </Text>
              <Text>Presidential Unit Citation (Navy) for INCHON,</Text>
              <Text>Valorous Unit Award for BINH DUONG PROVINCE,</Text>
              <Text>Valorous Unit Award for THUA THIEN PROVINCE,</Text>
              <Text>
                Meritorious Unit Commendation (Army) for VIETNAM 1968,
              </Text>
              <Text>
                Meritorious Unit Commendation (Army) for SOUTHWEST ASIA,
              </Text>
              <Text>Army Superior Unit Award for 1995-1996,</Text>
              <Text>
                Philippine Presidential Unit Citation for 17 OCTOBER 1944 TO 4
                JULY 1945,
              </Text>
              <Text>
                Republic of Korea Presidential Unit Citation for KOREA
                1950-1952,
              </Text>
              <Text>
                Republic of Korea Presidential Unit Citation for KOREA 1952-1953
              </Text>
            </Body>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Body>
              <Text>BY ORDER OF THE SECRETARY OF THE ARMY:</Text>
              <Text>ROBERT J. DALESSANDRO</Text>
              <Text>Director, Center of Military History</Text>
            </Body>
          </CardItem>
        </Card>
        
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    marginBottom: 200,
  },
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },
});

