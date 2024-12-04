import { View } from "react-native";
import AgeComponent from "../components/AgeComponent";
import FavoriteSubjectComponent from "../components/FavoriteSubjectComponent";
import InstaComponent from "../components/InstaComponent";
import NameComponent from "../components/NameComponent";

const Index = () => {
  return (
    <View>
      <NameComponent />
      <AgeComponent />
      <InstaComponent />
      <FavoriteSubjectComponent />
    </View>
  );
};

export default Index;
