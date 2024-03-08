import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
const { height } = Dimensions.get('window');

const PH31536_bai12 = () => {
    const [expandedSection, setExpandedSection] = useState('');

    const toggleExpand = (section) => {
        setExpandedSection(section === expandedSection ? '' : section);
    };

    const sections = [
        { key: 'schedule', title: 'Lịch trình', items: ['Địa điểm:', 'Thời gian:', 'Phương tiện di chuyển:', 'Thời gian:', 'Hình ảnh'], item2: ['Hồ Tràm, Vũng Tàu', '09:00 AM - 12:00 AM, 13/12.2024', 'Xe bus', '21:00 - 22:00'] },
        { key: 'other', title: 'Khách sạn', items: ['Tên khách sạn:', 'Giờ mở cửa:', 'Đia điểm:'], item2: ['Hồng Quỳnh', '06:00 AM-12:00 AM', '234 Quang Trung, Hồ Chí Minh'] },
    ];



    return (
        <View style={styles.container}>
            {sections.map(section => (
                <View key={section.key}>
                    <TouchableOpacity
                        onPress={() => toggleExpand(section.key)}
                        style={[
                            styles.sectionHeader,
                            { backgroundColor: expandedSection === section.key ? 'lightblue' : 'lightgrey' },
                        ]}
                    >
                        <Text style={styles.sectionHeaderText}>{section.title}</Text>
                    </TouchableOpacity>
                    {expandedSection === section.key && (
                        <View style={styles.itemContainer}>
                            {section.items.map((item, index) => (



                                <View key={index} style={styles.item}>
                                    {index === 4 && section.key === 'schedule' ? (
                                        <View style={{ flexDirection: 'column', }}>
                                            <Text style={{ color: 'gray', fontSize: 15, fontWeight: 'bold' }}>{item}</Text>
                                            <Image source={{ uri: 'https://pix10.agoda.net/hotelImages/33941483/-1/92d9a6b76b12954fb5a87a1169633369.jpg?ce=0&s=702x392' }} style={styles.image} />
                                        </View>

                                    ) : (
                                        <Text style={{ color: 'gray', fontSize: 15, fontWeight: 'bold' }}>{item}</Text>
                                    )}

                                    {section.key === 'schedule' && section.item2[index] && (
                                        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>{section.item2[index]}</Text>
                                    )}

                                    {section.key === 'other' && section.item2[index] && (
                                        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>{section.item2[index]}</Text>
                                    )}
                                </View>

                            ))}

{section.key === 'other' && (
                                <TouchableOpacity onPress={() => {}}>
                                    <Text style={{ backgroundColor: '#00BFFF',color: 'white', fontSize: 18, fontWeight: 'bold', margin: 20, padding: 10 , textAlign: 'center'}}>Xem chi tiết</Text>
                                </TouchableOpacity>
                            )}


                        </View>
                    )}
                </View>
            ))}
        </View>
    );
}

export default PH31536_bai12

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    sectionHeader: {
        padding: 10,
        backgroundColor: 'lightgrey',
    },
    sectionHeaderText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black'

    },
    itemContainer: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: 'gray',

    },
    item: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'white',
    },
    image: {
        width: '100%',
        height: 200,
    },
})