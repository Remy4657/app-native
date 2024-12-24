import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

type CustomButtonProps = {
  title: string;
  handlePress: () => void; // Hàm không trả về giá trị
  containerStyles?: string; // ClassName của NativeWind hoặc chuỗi tùy chỉnh
  textStyles?: string; // ClassName của NativeWind hoặc chuỗi tùy chỉnh
  isLoading?: boolean; // Trạng thái tải
};
const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
