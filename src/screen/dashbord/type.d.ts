import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/type";
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;

export type LandingHomeProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};
